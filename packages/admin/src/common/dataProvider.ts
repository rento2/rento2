import { stringify } from 'query-string'
import { fetchUtils, DataProvider } from 'ra-core'
import { HttpError } from 'react-admin'

export default (
  apiUrl: string,
  httpClient = fetchUtils.fetchJson
): DataProvider => ({
  getList: async (resource, params) => {
    const { page } = params.pagination
    const { field: sortColumn, order: sortDirection } = params.sort

    const query = {
      sortDirection: sortDirection.toLowerCase(),
      sortColumn,
      page
    }
    const url = `${apiUrl}/${resource}/list/${page}?${stringify(query)}`

    return httpClient(url).then(({ json }) => {
      return {
        data: json.data.items,
        total: json.meta.pagination.total
      }
    })
  },

  getOne: async (resource, params) =>
    httpClient(`${apiUrl}/${resource}/one/${params.id}`).then(({ json }) => ({
      data: json.data
    })),

  getMany: async (resource, params) => {
    const url = `${apiUrl}/${resource}/many`
    return await httpClient(url, {
      body: JSON.stringify({ ids: params.ids }),
      method: 'POST'
    }).then(({ json }) => ({ data: json.data.items }))
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
      method: 'POST',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json.data })).catch((err: HttpError) => {
      const errorsList = err.body?.meta?.error?.message
      if (Array.isArray(errorsList) && errorsList.length) {
        throw new Error(`Ошибка валидации, поле ${errorsList[0]?.field}, ошибка: ${errorsList[0]?.message}`)
      }

      throw new Error('Неизвестная ошибка сервера')
    }),

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

  uploadPhoto: async (params: {
    file: Blob
    apartmentId: string
  }) => {
    const formData = new FormData()

    formData.append('image', params.file)
    formData.append('apartmentId', params.apartmentId)

    return httpClient(`${apiUrl}/photos/create`, {
      method: 'POST',
      body: formData
    }).then(({ json }) => ({
      data: { id: json.id }
    }))
  },

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
