import React, { useState } from "react";
import { useForm } from "react-hook-form"; 

const CreateGPT = () => {
    const { register, handleSubmit } = useForm (); 
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [usability, setUsability] = useState(""); 
    const [homeLink, setHomeLink] = useState(""); 
    const [apiDocs, setApiDocs] = useState(""); 
    const [photo, setPhoto] = useState({}); 

    function testState () { 
        const formData =  { 
            title, 
            description, 
            usability, 
            homeLink, 
            apiDocs, 
            photo, 
        }; 

        console.log(formData); 
    }

    async function submitForm () { 
        const formData =  { 
            title, 
            description, 
            usability, 
            homeLink, 
            apiDocs, 
            photo, 
        }; 

        try { 
            const req = await fetch("http://localhost:3000/api/gpts/create", { 
                method: "post", 
                mode: "cors", 
                body: JSON.stringify(formData), 
                headers: { 
                    "Content-Type": "application/json", 
                }
            }); 

            if(req.status !== 200){ 
                return; 
            }

        } catch (err) { 
            console.log(err); 
        }
    }

    return ( 
        <section className="create-page page">
            <form method = "POST" action="http://localhost:3000/api/gpts/create" 
                encType="multipart/form-data" onSubmit={ () => { handleSubmit(submitForm)}}>
                <div>
                    <label htmlFor="title">Titlu: </label>
                    <input {...register("title", { required: " required field " }) }
                        onChange = { (e) => { setTitle(e.target.value)}}
                        type="text" name = "title"  />
                </div>

                <div>
                    <label htmlFor="description">Titlu: </label>
                    <textarea {...register("description", { required: "required field "})} 
                        onChange = { (e) => { setDescription(e.target.value)}}
                        type="text" name = "description" cols = "30" rows= "10"   />
                </div>

                <div>
                    <label htmlFor="usability">Titlu: </label>
                    <textarea 
                        onChange = { (e) => setUsability(e.target.value)} 
                        type="text" name = "usability" cols = "30" rows= "10"   />
                </div>

                <div>
                    <label htmlFor="homeLink">Link site AI: </label>
                    <input {...register("homeLink", { required: 'required field'} ) }
                        type="text"
                        onChange = { e => setHomeLink(e.target.value)} 
                        name = "homeLink" />
                </div>

                <div>
                    <label htmlFor="apiDocs">API Docs: </label>
                    <input {...register("apiDocs", { required  : "required field" } )  } type="text"
                        onChange = { e => setApiDocs(e.target.value)} name = "apiDocs" />
                </div>

                <div>
                    <input { ...register("photo") } type="file" multiple onChange = { (e) => {  setPhoto(e.target.files) } } name = "photo[]"/>
                </div>

                <button type = "submit"> Creeaza </button>
            </form>

            <article>
                <button onClick = { testState }> Test </button>
            </article>
        </section>
    )
}; 

export default CreateGPT; 