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
    const url = `${apiUrl}/${resource}/list/${page}?${stringify(query)}`

    return httpClient(url).then(({ json }) => ({
      data: json.data.items,
      total: json.meta.pagination.total
    }))
  },

  getOne: async (resource, params) =>
    httpClient(`${apiUrl}/${resource}/one/${params.id}`).then(({ json }) => ({
      data: json.data
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
    const url = `${apiUrl}/${resource}/list/${page}?${stringify(query)}`

    return await httpClient(url).then(({ json }) => ({
      data: json,
      total: json.meta.pagination.total
    }))
  },
  update: async (resource, params) =>
    await httpClient(`${apiUrl}/${resource}/update/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json.data })),

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
    httpClient(`${apiUrl}/${resource}/create`, {
      method: 'POST',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id }
    })),

  delete: async (resource, params) =>
    httpClient(`${apiUrl}/${resource}/delete/${params.id}`, {
      method: 'DELETE'
    }).then(({ json }) => ({ data: json })),

  deleteMany: async (resource, params) =>
    Promise.all(
      params.ids.map(async id =>
        httpClient(`${apiUrl}/${resource}/delete/${id}`, {
          method: 'DELETE'
        })
      )
    ).then(responses => ({
      data: responses.map(({ json }) => json.id)
    }))
})
