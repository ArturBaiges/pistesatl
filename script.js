const equipamentsPistes = {
    "Pista d'atletisme": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Superfície de tartà o sintètica": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Línies de carrils numerats": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Blocs de sortida": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Tanques ajustables": ["Tarragona", "Reus", "Vendrell"],
    "Ria d’aigua": ["Tarragona", "Vendrell"],
    "Salt de llargada i triple salt": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Taula de batuda": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Fossat amb sorra": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Salt d’altura": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Llistó": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Llançament de pes": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Llançament de javelina": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Vestidors i dutxes": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"],
    "Graderies": ["Tarragona", "Reus", "Cambrils", "Vendrell", "Valls"]
};

function mostrarModal(equipament) {
    document.getElementById('equipament-title').textContent = equipament;
    document.getElementById('pistes-list').innerHTML = equipamentsPistes[equipament]?.join("<br>") || "Cap pista disponible";
    document.getElementById('modal').style.display = "block";
}

function tancarModal() {
    document.getElementById('modal').style.display = "none";
}
