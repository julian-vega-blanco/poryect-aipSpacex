function SpaceApi(done) {
const results = fetch("https://api.spacexdata.com/v3/launches");


results
    .then (response => response.json())
    .then(data =>{
        done(data)
    })
    }

    SpaceApi(data => {
        data.forEach(mision => {
            const { mission_name, details,} = mision
            const {mission_patch_small,youtube_id} = mision.links
            const article = document.createRange().createContextualFragment(
                
                `<div class="card" style="width: 18rem;">
    
                <img src="${mission_patch_small}" class="card-img-top" alt="...">
    
                <div class="card-body">
    
                  <h5 class="card-title">${mission_name}</h5> // Modificación aquí
    
                  <p class="card-text">${details}</p> // Modificación aquí
                  
                  <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Mission details
                    </button>

                    <!-- Modal -->
                    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Missions</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <h5 class="card-title">${mission_name}</h5> // Modificación aquí
    
                        <p class="card-text">${details}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>

                
                  </div>
              
                  </div>`
            );
    
            const main = document.querySelector(".cards");
    
            main.appendChild(article);
            
        });
    });

    
