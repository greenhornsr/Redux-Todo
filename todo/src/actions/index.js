export const FIRST_ACTION = 'FIRST_ACTION';
export function firstAction(info) {
  console.log(info);
  return {
    type: FIRST_ACTION,
    payload: info
  };
}