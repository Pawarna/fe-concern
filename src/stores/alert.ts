import { defineStore } from 'pinia'

interface AlertState {
  show: boolean
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  confirmAction: (() => void) | null
  showConfirm: boolean
  showPrompt: boolean
  promptValue: string
  onPromptConfirm: ((value: string) => void) | null
}

export const useAlertStore = defineStore('alert', {
  state: (): AlertState => ({
    show: false,
    type: 'success',
    title: '',
    message: '',
    confirmAction: null,
    showConfirm: false,
    showPrompt: false,
    promptValue: '',
    onPromptConfirm: null,
  }),
  actions: {
    // Toast sederhana (Auto-hide)
    toast(message: string, type: AlertState['type'] = 'success') {
      this.type = type
      this.message = message
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 3000)
    },

    // Modal Konfirmasi (Untuk hapus data, dll)
    confirm({
      title,
      message,
      onConfirm,
    }: {
      title: string
      message: string
      onConfirm: () => void
    }) {
      this.title = title
      this.message = message
      this.confirmAction = onConfirm
      this.showConfirm = true
    },

    executeConfirm() {
      if (this.confirmAction) this.confirmAction()
      this.showConfirm = false
      this.confirmAction = null
    },

    prompt(title: string, defaultValue: string = '', onConfirm: (value: string) => void) {
      this.title = title
      this.promptValue = defaultValue
      this.onPromptConfirm = onConfirm
      this.showPrompt = true
    },

    executePrompt() {
      if (this.onPromptConfirm) this.onPromptConfirm(this.promptValue)
      this.showPrompt = false
    },
  },
})
