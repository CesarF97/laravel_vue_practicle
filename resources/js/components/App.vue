<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <!-- Barra de navegación -->
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <h3 class="navbar-brand" href="#">Menu</h3>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Dragon Ball Super <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pokemon</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <!-- Body -->
                <div class="card">
                    <div class="card-header text-center"> <h2>{{title}}</h2></div>
                    <br>
                    <div class="active-pink-3 active-pink-4 mb-4">
                        <input class="form-control" @input="searchCharacter" v-model="characterSearched" type="text" placeholder="Buscar personaje" aria-label="Search">
                    </div>
                    
                    <br>
                    <button class="btn btn-primary" @click="fetchApi">Consultar Api</button>
                    <hr>
                    <table class="table  nowrap scroll-horizontal-vertical myTable table-striped w-100">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Especie</th>
                                <th>Rol</th>
                                <th>Imagen</th>
                                <th>Estado</th>
                                <th>Universo</th>
                                <th>Origen</th>
                            </tr>
                        </thead>
                        <tbody id="tableApi">
                            <tr v-for="character in characters" :key="character.id">
                                <td>{{character.name}}</td>
                                <td>{{character.specie}}</td>
                                <td>{{character.role}}</td>
                                <td>
                                    <img width="175px" :src="character.imageUrl">
                                </td>
                                <td>{{character.status}}</td>
                                <td>{{character.universe}}</td>
                                <td>{{character.originplanet}}</td>
                            </tr>
                        </tbody>
                    <!--  Tabla que muestra la busqueda-->
                        <tbody class="d-none" id="tableSearch">
                            <tr v-for="character in charactersFiltred" :key="character.id">
                                <td>{{character.name}}</td>
                                <td>{{character.specie}}</td>
                                <td>{{character.role}}</td>
                                <td>
                                    <img width="175px" :src="character.imageUrl">
                                </td>
                                <td>{{character.status}}</td>
                                <td>{{character.universe}}</td>
                                <td>{{character.originplanet}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      title: "Practica  Vue",
      characterSearched : '',
      contador: 0,
      characters : [],
      charactersFiltred : [],
    };
  },
  mounted() {
    // this.fetchApi();
  },
  methods: {
    // Peticion a la api
    fetchApi(){
        const options = {
            method: 'GET',
            url: 'https://dragon-ball-super-api.herokuapp.com/api/characters',
            headers: {
                // 'X-RapidAPI-Key': '4b814af92cmsh3e537fe7772462bp1a40ddjsn12e9482c026b',
                // 'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com'
            }
        };
        this.characters = [];
            
        Vue.axios.request(options).
            then((res)=>{
                res.data.forEach((character)=>{
                    this.characters.push(character)
                })
            })
            .catch(function (error) {
            console.error(error);
        });
        
        
    },
    // Buscador
    searchCharacter(){
        const tablaSearch = document.querySelector('#tableSearch');
        const tableApi = document.querySelector('#tableApi');
        if(this.characterSearched !== '')
        {   
            this.characterSearched = this.characterSearched[0].toUpperCase() + this.characterSearched.substring(1);
            this.charactersFiltred = this.characters.filter( character => character.name.includes(this.characterSearched) );
            tablaSearch.classList.remove('d-none');
            tableApi.classList.add('d-none');

        }else{
            tablaSearch.classList.add('d-none');
            tableApi.classList.remove('d-none');
        }
    },
  }
};
</script>