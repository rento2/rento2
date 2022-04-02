import { stringify } from 'query-string'
import { fetchUtils, DataProvider } from 'ra-core'

export default (
  apiUrl: string,
  httpClient = fetchUtils.fetchJson,
  countHeader: string = 'Content-Range'
): DataProvider => ({
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort

    const rangeStart = (page - 1) * perPage
    const rangeEnd = page * perPage - 1

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([rangeStart, rangeEnd]),
      filter: JSON.stringify(params.filter)
    }
    const url = `${apiUrl}/${resource}?${stringify(query)}`
    const options =
      countHeader === 'Content-Range'
        ? {
          // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
            headers: new Headers({
              Range: `${resource}=${rangeStart}-${rangeEnd}`
            })
          }
        : {}

    return await httpClient(url, options).then(({ headers, json }) => {
      if (!headers.has(countHeader)) {
        throw new Error(
          `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
        )
      }
      return {
        data: json.data,
        total:
          countHeader === 'Content-Range'
            ? parseInt(String('content-range'.split('/').pop()), 10)
            : parseInt(String(headers.get(countHeader.toLowerCase())))
      }
    })
  },

  getOne: async (resource, params) =>
    await httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json
    })),

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    }
    const url = `${apiUrl}/${resource}?${stringify(query)}`
    return await httpClient(url).then(({ json }) => ({ data: json }))
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort

    const rangeStart = (page - 1) * perPage
    const rangeEnd = page * perPage - 1

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    }
    const url = `${apiUrl}/${resource}?${stringify(query)}`
    const options =
      countHeader === 'Content-Range'
        ? {
          // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
            headers: new Headers({
              Range: `${resource}=${rangeStart}-${rangeEnd}`
            })
          }
        : {}

    return await httpClient(url, options).then(({ headers, json }) => {
      if (!headers.has(countHeader)) {
        throw new Error(
          `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
        )
      }
      return {
        data: json,
        total:
          countHeader === 'Content-Range'
            ? parseInt(String('content-range'.split('/').pop()), 10)
            : parseInt(String(headers.get(countHeader.toLowerCase())))
      }
    })
  },

  update: async (resource, params) =>
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json })),

  // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
  updateMany: async (resource, params) =>
    await Promise.all(
      params.ids.map(async id =>
        await httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(params.data)
        })
      )
    ).then(responses => ({ data: responses.map(({ json }) => json.id) })),

  create: async (resource, params) =>
    await httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id }
    })),

  delete: async (resource, params) =>
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    }).then(({ json }) => ({ data: json })),

  // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: async (resource, params) =>
    await Promise.all(
      params.ids.map(async id =>
        await httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'DELETE',
          headers: new Headers({
            'Content-Type': 'text/plain'
          })
        })
      )
    ).then(responses => ({
      data: responses.map(({ json }) => json.id)
    }))
})
