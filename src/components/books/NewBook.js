import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";

export function NewBook() {
    const [books,setBooks] = useOutletContext();
    const navigate=useNavigate();
    console.log(books);
    let newBook={
        id:4,
        title:"",
        pages:0
    }
    //How to handle forms

    //====1. Using onChange event==
    const titleChange=(event)=>{
        console.log(event.target.value);
        newBook.title=event.target.value;
    }
    const pagesChange=(event)=>{
        console.log(event.target.value);
        newBook.pages=event.target.value;
    }
    //===2. ref binding to input
    let titleRef=useRef("TitleTest");
    let pagesRef=useRef(0);
    console.log(titleRef.current);
    console.log(pagesRef.current);
    //for two variant
    // const submit=(event)=>{
    //     event.preventDefault();
    //      //read ref data
    //     newBook.title=titleRef.current.value;
    //     newBook.pages=pagesRef.current.value;
    //     console.log(newBook);
    //  };
    //3 ====using react hook form=====
     const {register,handleSubmit}=useForm();
     const onSubmit=(newBook)=>{
        // console.log({ ...register("title") });
        newBook.id=books.length+1;
        // const newBooks=[...books,newBook];
        setBooks([...books,newBook]);
        console.log(newBook);
        navigate('/books');
     };

    return (
        <>
            <div className="form-newbook">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-input">
                        <label> Title:  </label>
                        {/* <input type="text" name="title" onChange={titleChange} required /> */}
                        {/* <input ref={titleRef} type="text" name="title" required /> */}
                        <input {...register("title")} type="text" name="title" required />
                    </div>
                    <div className="container-input">
                        <label> Pages:  </label>
                        {/* <input type="number" name="pages" onChange={pagesChange} required /> */}
                        {/* <input ref={pagesRef} type="number" name="pages"required /> */}
                        <input {...register("pages")} type="number" name="pages" required />
                    </div>
                    <div className="containar-button">
                        {/* <input type="submit" onClick={submit} value="Add Book"/> */}
                        <input type="submit"  value="Add Book"/>
                    </div>
                </form>
            </div>
        </>
    )
}
