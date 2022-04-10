import { stringify } from 'query-string'
import { fetchUtils, DataProvider } from 'ra-core'

export default (
  apiUrl: string,
  httpClient = fetchUtils.fetchJson
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

    return await httpClient(url).then(({ json }) => ({
      data: json.data,
      // TODO: remove hardcoded pag
      total: 5
    }))
  },

  getOne: async (resource, params) =>
    await httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json.data[0]
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

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    }
    const url = `${apiUrl}/${resource}?${stringify(query)}`

    return await httpClient(url).then(({ json }) => ({
      data: json,
      // TODO: remove hardcoded pag
      total: 5
    }))
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

  create: async (resource, params) => {
    return await httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id }
    }))
  },

  delete: async (resource, params) =>
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE'
    }).then(({ json }) => ({ data: json })),

  // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: async (resource, params) =>
    await Promise.all(
      params.ids.map(async id =>
        await httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'DELETE'
        })
      )
    ).then(responses => ({
      data: responses.map(({ json }) => json.id)
    }))
})
