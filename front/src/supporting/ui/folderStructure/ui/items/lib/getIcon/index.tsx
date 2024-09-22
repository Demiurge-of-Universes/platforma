import {
  FolderAddOutlined,
  FileProtectOutlined,
  FileUnknownOutlined,
} from 'supporting/icons'

export const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'folder':
      return <FolderAddOutlined />
    case 'file':
      return <FileProtectOutlined />
    default:
      return <FileUnknownOutlined />
  }
}
