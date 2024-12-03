const modal = document.getElementById('deleteModal');
function openModal() {
  modal.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
}
function handleDelete() {
  alert('Keya Vai deleted!');
  closeModal();
}
