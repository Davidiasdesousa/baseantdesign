/**
 *
 */
import request from '@/utils/request';

export async function post(params) {
  return request('/api/newpage/test', {
    method: 'POST',
    body: params,
  });
}
