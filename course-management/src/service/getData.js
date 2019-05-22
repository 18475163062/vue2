import axios from '../http/http'
export const list = (currentPage,pageSize) =>axios.get('api/video/list?page_num=' + currentPage+ '&page_size=' + pageSize)
export const upload =(formData) => axios.post('/api/video/upload', formData)
export const delet =(id) =>axios.post('/api/video/delete?id='+ id)
export const videoUpdate=(form)=> axios.post('/api/video/update',form)
export const seeVideo =(id) =>axios.get('/api/video/'+ id +'/detail')
export const fileList = (currentPage,pageSize) => axios.get('/api/office/record/list?page_num=' + currentPage+'&page_size=' +pageSize)
export const fileUpload = (form) => axios.post('/api/office/record/upload',form)
export const dele =(id) =>axios.post('/api/office/record/delete?id='+ id)
export const Offi =(id) =>axios.get('/api/office/record/'+id+'/detail')
export const update =(form)=> axios.post('/api/office/record/update',form)
export const seeEdie = (record_id) =>axios.get('/office/record/file/editor?record_id='+record_id+'&edit=true')


export const getCatalogList = (url, userId) => axios.get(url + '?user_id=' + userId)
export const updateCatalog = (url, form) => axios.post(url, form)
export const deleteCatalog = (url, form) => axios.post(url, form)
export const insertCatalog = (url, form) => axios.post(url, form)