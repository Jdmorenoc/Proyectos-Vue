<script setup>
    import { ref } from 'vue';
  
    const documents = ref([{
        name: 'OneDrive - Personal', type: 'folder', expanded: true, children:[
          {name: 'Documentos', type: 'folder', expanded: false, children:[
            {name: 'Escritorio', type: 'folder', expanded: false, children:[]},
            {name: 'Galeria', type: 'folder', expanded: false, children:[]},
            {name: 'Videos', type: 'folder', expanded: false, children:[]},
            {name: 'Juegos', type: 'folder', expanded: false, children:[]}
           ]
        },

        {name: 'Programacion', type: 'folder', expanded: false, children:[]},
        {name: 'Informacion', type: 'folder', expanded: false, children:[]},
        {name: 'Tareas', type: 'folder', expanded: false, children:[]}
      ]
    }
 ]);

    const folderName = ref('')

    const toggleView = (folder) =>{
        folder.expanded = !folder.expanded
    }

    const addFolder = () => {
        documents.value.push({name: folderName.value, type: 'folder', expanded: false, children: []})
        folderName.value = ''
    }

  </script>


<template>

    <div class="p-4 bg-slate-100 w-1/4 ml-[5%] mt-[5%] rounded-lg">
        <ul>
            <li v-for="folder in documents" :key="folder.name">
                <!-- Mostrar el OneDrive -->
                <div @click="toggleView(folder)" class="cursor-pointer flex items-center">
                    <span>{{ folder.expanded ? '📂' : '📁' }}</span>
                    <span class="ml-2 ">{{ folder.name }} </span>
                </div>

                <!-- Mostrar las carpetas dentro de OneDrive -->
                <ul v-if="folder.expanded" class="ml-4">
                    <li v-for="child in folder.children" :key="child.name">

                        <div @click="toggleView(child)" class="cursor-pointer flex items-center">
                            <span>{{ child.expanded ? '📂' : '📁' }}</span>
                            <span class="ml-2">{{ child.name }}</span>
                        </div>

                        <ul v-if="child.expanded" class="ml-4">
                            <li v-for="grandchild in child.children" :key="grandchild.name">
                                <div class="cursor-pointer flex items-center">
                                    <span>📄</span>
                                    <span class="ml-2">{{ grandchild.name }}</span>
                                </div>
                            </li>
                        </ul>

                    </li>
                </ul>

            </li>
        </ul>

        <div class="mt-4">
            <input class="pl-3 py-1 rounded-l-lg" v-model="folderName" type="text" placeholder="Folder Name">
            <button @click="addFolder" class="bg-blue-400 p-1 px-2  rounded-r-lg hover:bg-blue-600 hover:text-white">Add</button>
        </div>
    </div>

</template>
