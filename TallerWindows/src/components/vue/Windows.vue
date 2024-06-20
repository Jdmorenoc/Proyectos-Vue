<script setup>
import { ref } from 'vue';

// Estructura inicial de documentos
const documents = ref([{
    name: 'OneDrive - Personal', type: 'folder', expanded: true, children: [
        { name: 'Documentos', type: 'folder', expanded: false, children: [
            { name: 'Escritorio', type: 'folder', expanded: false, children: [] },
            { name: 'Galeria', type: 'folder', expanded: false, children: [] },
            { name: 'Videos', type: 'folder', expanded: false, children: [] },
            { name: 'Juegos', type: 'folder', expanded: false, children: [] }
        ]},
        { name: 'Programacion', type: 'folder', expanded: false, children: [] },
        { name: 'Informacion', type: 'folder', expanded: false, children: [] },
        { name: 'Tareas', type: 'folder', expanded: false, children: [] }
    ]
}]);

const folderName = ref('');

const toggleView = (folder) => {
    folder.expanded = !folder.expanded;
};

const addFolder = () => {
    documents.value.push({ name: folderName.value, type: 'folder', expanded: false, children: [] });
    folderName.value = '';
};

const removeFolder = (parentArray, index) => {
    parentArray.splice(index, 1);
};

</script>

<template>
<div class="p-4 bg-slate-200 w-1/4 ml-[5%] mt-[5%] rounded-lg">
    <ul>
        <li v-for="(folder, index) in documents" :key="folder.name">
            <div class="cursor-pointer flex items-center">
                <span @click="toggleView(folder)">{{ folder.expanded ? '📂' : '📁' }}</span>
                <span @click="toggleView(folder)" class="ml-2">{{ folder.name }}</span>
                <button @click="removeFolder(documents.value, index)" class="ml-2 text-red-500">❌</button>
            </div>
            <ul v-if="folder.expanded" class="ml-4">
                <li v-for="(child, childIndex) in folder.children" :key="child.name">
                    <div class="cursor-pointer flex items-center">
                        <span @click="toggleView(child)">{{ child.expanded ? '📂' : '📁' }}</span>
                        <span @click="toggleView(child)" class="ml-2">{{ child.name }}</span>
                        <button @click="removeFolder(folder.children, childIndex)" class="ml-2 text-red-500">❌</button>
                    </div>
                    <ul v-if="child.expanded" class="ml-4">
                        <li v-for="(grandchild, grandchildIndex) in child.children" :key="grandchild.name">
                            <div class="cursor-pointer flex items-center">
                                <span>📄</span>
                                <span class="ml-2">{{ grandchild.name }}</span>
                                <button @click="removeFolder(child.children, grandchildIndex)" class="ml-2 text-red-500">❌</button>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

    <div class="mt-4">
        <input class="pl-3 py-1 rounded-l-lg" v-model="folderName" type="text" placeholder="Folder Name">
        <button @click="addFolder" class="bg-blue-400 p-1 px-2 rounded-r-lg hover:bg-blue-600 hover:text-white">Add</button>
        
    </div>
</div>
</template>
