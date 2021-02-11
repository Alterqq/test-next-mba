import {writable} from 'svelte/store';

export const infoMode = writable('insights')
export const insights = writable([
  {id: 1, timeCode: '00:11', name: 'Д. Пашутин', date: new Date('2020.09.29'), note: 'lorem ipsum'},
  {id: 2, timeCode: '00:22', name: 'A. Васильев', date: new Date('2020.09.30'), note: 'lorem ipsum'},
  {id: 3, timeCode: '00:33', name: 'К. Абрамов', date: new Date('2020.10.01'), note: 'lorem ipsum'},
  {id: 4, timeCode: '00:44', name: 'Л. Киреев', date: new Date('2020.10.05'), note: 'lorem ipsum'},
  {id: 5, timeCode: '00:23', name: 'М. Уткина', date: new Date('2020.10.15'), note: 'lorem ipsum'},
  {id: 6, timeCode: '00:18', name: 'М. Уткина', date: new Date('2020.10.15'), note: 'lorem ipsum'},
])
