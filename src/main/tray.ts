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
    { type: 'separator' },
    { label: 'Sair do app', role: 'quit' },
  ])

  tray.setContextMenu(menu)
}
