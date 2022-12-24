import { BrowserWindow, Menu, Tray } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
  const tray = new Tray(path.resolve(__dirname, 'rotionTemplate.png'))

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => window.webContents.send('new-document'),
    },
    { type: 'separator' },
    { label: 'Documentos recentes', click: () => console.log('new') },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
      click: () => console.log('new'),
    },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
      click: () => console.log('new'),
    },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
      click: () => console.log('new'),
    },
    { type: 'separator' },
    { label: 'Sair do app', role: 'quit' },
  ])

  tray.setContextMenu(menu)
}
