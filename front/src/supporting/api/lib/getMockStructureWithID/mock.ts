import { Structure } from 'supporting/api/types'

export const parentStrucutre: Structure = {
  items: [
    {
      id: '12',
      name: 'Folder 1',
      iconName: 'folder',
    },
  ],
}

export const childrenStructure: Record<string, Structure> = {
  '12': {
    id: '12',
    name: 'Folder 1',
    iconName: 'folder',
    items: [
      {
        id: '12',
        name: 'Project 1',
        iconName: 'file',
      },
    ],
  },
}
