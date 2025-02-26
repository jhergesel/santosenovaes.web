console.log("Editor.js carregado");

document.getElementById('siteTitle').addEventListener('input', function() {
    document.getElementById('previewTitle').innerText = this.value || 'Título do Site';
});

document.getElementById('siteDescription').addEventListener('input', function() {
    document.getElementById('previewDescription').innerText = this.value || 'Descrição do site...';
});

document.getElementById('saveChanges').addEventListener('click', function() {
    alert('Alterações salvas! (Funcionalidade de salvamento real ainda não implementada)');
});
