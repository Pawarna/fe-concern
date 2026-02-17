import Swal from 'sweetalert2'

export const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  background: '#18181b', // zinc-900
  color: '#e4e4e7', // zinc-200
  customClass: {
    popup: 'border border-zinc-800 rounded-xl shadow-2xl',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})

export const alertSuccess = (title: string) => {
  Swal.fire({
    title,
    icon: 'success',
    background: '#18181b',
    color: '#fff',
    confirmButtonColor: '#2563eb', // blue-600
    customClass: {
      popup: 'border border-zinc-800 rounded-2xl',
      confirmButton: 'rounded-lg px-5 py-2.5 text-sm font-bold',
    },
  })
}

export const confirmDelete = async (title: string) => {
  return Swal.fire({
    title,
    text: 'Data yang dihapus tidak bisa dikembalikan!',
    icon: 'warning',
    showCancelButton: true,
    background: '#18181b',
    color: '#fff',
    confirmButtonColor: '#ef4444', // red-500
    cancelButtonColor: '#3f3f46', // zinc-700
    confirmButtonText: 'Ya, Hapus!',
    cancelButtonText: 'Batal',
    customClass: {
      popup: 'border border-zinc-800 rounded-2xl',
      confirmButton: 'rounded-lg px-5 py-2.5 text-sm font-bold',
      cancelButton: 'rounded-lg px-5 py-2.5 text-sm font-bold',
    },
  })
}
