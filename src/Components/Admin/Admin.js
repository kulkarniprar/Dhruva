import React,{useState} from 'react'
import "./Admin.css"



const Admin = () => {
  const[blog,setBlog]=useState({mainHeading:'',
    subheadings:[{title:'',text:'',imageLink:[],otherlinks:[]}],
    createdate:'',
    author:'',
    priority:''});


 
  
  
{/* return (
    <div className='Main'>
      <label>Enter Heading</label>
      <input type='text' value={blog.mainHeading} onChange={(e) => setBlog(prevState => ({...prevState,
        mainHeading:e.target.value
      }))}/>

     


<label>Enter Author details</label>
      <input
    type="text"
    value={blog.subheadings.author}
    onChange={(e) => setBlog(prevState => ({
    ...prevState,
    subheadings: [
      {
        ...prevState.subheadings,
        title: e.target.value
      },
      ...prevState.subheadings.slice(1) // preserve other subheadings
    ]
  }))} 
/>
<label>Enter date of creation/Updation</label>
      <input
    type="text"
    value={blog.subheadings.createdate}
    onChange={(e) => setBlog(prevState => ({
    ...prevState,
    subheadings: [
      {
        ...prevState.subheadings,
        title: e.target.value
      },
      ...prevState.subheadings.slice(1) 
    ]
  }))} 
/>

<label>Assign Priority</label>
      <input
    type="Number"
    value={blog.subheadings.priority}
    onChange={(e) => setBlog(prevState => ({
    ...prevState,
    subheadings: [
      {
        ...prevState.subheadings,
        title: e.target.value
      },
      ...prevState.subheadings.slice(1) 
    ]
  }))} 
/>

<label>Enter Subheading</label>
      <input
    type="text"
    value={blog.subheadings.title}
    onChange={(e) => setBlog(prevState => ({
    ...prevState,
    subheadings: [
      {
        ...prevState.subheadings,
        title: e.target.value
      },
      ...prevState.subheadings.slice(1) 
    ]
  }))} 
/>

#create a button 

 <label>Enter text for the subheading</label>
  <textarea
  value={blog.subheadings.text}
  onChange={(e) => setBlog(prevState => ({
    ...prevState,
    subheadings: [
      {
        ...prevState.subheadings,
        text: e.target.value
      },
      ...prevState.subheadings.slice(1) 
    ]
  }))} 

  
/>
    
    
    <label>Enter Image links</label>
    <input
  type="text"
  value={blog.subheadings.imageLinks} // assuming first image link in first subheading
  onChange={(e) => setBlog(prevState => ({
    ...prevState,
    subheadings: [
      {
        ...prevState.subheadings,
        imageLinks: [
          e.target.value,
          ...prevState.subheadings.imageLinks.slice(1) // preserve other imageLinks
        ]
      },
      ...prevState.subheadings.slice(1) // preserve other subheadings
    ]
  }))} 
/>


<button>Submit</button>
    </div>
  )
}
*/}

const handleSubheadingChange = (index, field, value) => {
  setBlog(prevBlog => ({
    ...prevBlog,
    subheadings: prevBlog.subheadings.map((subheading, subIndex) => (
      subIndex === index ? { ...subheading, [field]: value } : subheading
    ))
  }));
};

// Function to add a new subheading
const addSubheading = () => {
  setBlog(prevBlog => ({
    ...prevBlog,
    subheadings: [
      ...prevBlog.subheadings,
      { title: '', text: '', imageLink: [], otherlinks: [] }
    ]
  }));
};

// Function to remove a subheading
const removeSubheading = (index) => {
  setBlog(prevBlog => ({
    ...prevBlog,
    subheadings: prevBlog.subheadings.filter((subheading, subIndex) => subIndex !== index)
  }));
};

{/*const addLink = (index) => {
  setBlog(prevBlog => ({
    ...prevBlog.subheadings,
    otherlinks: prevBlog.otherlinks.filter((otherlinks,subIndex) => subIndex !== index)

  }));
};*/}

const addLink = (subheadingIndex, newLink) => {
  setBlog(prevBlog => ({
    ...prevBlog,
    subheadings: prevBlog.subheadings.map((subheading, index) => {
      if (index === subheadingIndex) {
        return {
          ...subheading,
          otherlinks: [...subheading.otherlinks, newLink]
        };
      }
      return subheading;
    })
  }));
};


// Function to handle form submission (for demo purposes)
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(blog); // This will show the updated blog state with all subheadings
  // You can perform further actions with the blog state, like sending it to a server or storing it locally
};

return (
  <div className='Main'>
    <form className='Form' onSubmit={handleSubmit}>
      {/* Render each subheading with input fields */}
      <label>Enter Heading</label>
      <input type='text' value={blog.mainHeading} onChange={(e) => setBlog(prevState => ({...prevState,
        mainHeading:e.target.value
      }))}/>

<label>Enter Author details</label>
      <input
    type="text"
    value={blog.subheadings.author}
    onChange={(e) => setBlog(prevState => ({
    ...prevState,
    subheadings: [
      {
        ...prevState.subheadings,
        title: e.target.value
      },
      ...prevState.subheadings.slice(1) // preserve other subheadings
    ]
  }))} 
/>

<label>Enter date of creation/Updation</label>
      <input
    type="text"
    value={blog.subheadings.createdate}
    onChange={(e) => setBlog(prevState => ({
    ...prevState,
    subheadings: [
      {
        ...prevState.subheadings,
        title: e.target.value
      },
      ...prevState.subheadings.slice(1) 
    ]
  }))} 
/>

<label>Assign Priority</label>
      <input
    type="Number"
    value={blog.subheadings.priority}
    onChange={(e) => setBlog(prevState => ({
    ...prevState,
    subheadings: [
      {
        ...prevState.subheadings,
        title: e.target.value
      },
      ...prevState.subheadings.slice(1) 
    ]
  }))} 
/>


      {blog.subheadings.map((subheading, index) => (
        <div key={index}>
          <label>Title for subheading {index + 1}</label>
          <input
            type="text"
            value={subheading.title}
            onChange={(e) => handleSubheadingChange(index, 'title', e.target.value)}
          />
          <br />
          <label>Text for subheading {index + 1}</label>
          <textarea
            value={subheading.text}
            onChange={(e) => handleSubheadingChange(index, 'text', e.target.value)}
          />
          {/* Example for imageLink array */}
          <label>Image Links for subheading {index + 1}</label>
          <input
            type="text"
            value={subheading.imageLink.join(', ')}
            onChange={(e) => handleSubheadingChange(index, 'imageLink', e.target.value.split(', '))}
          />
          {/* Example for otherlinks array */}
          <label>Other Links for subheading {index + 1}</label>
          <input
            type="text"
            value={subheading.otherlinks.join(', ')}
            onChange={(e) => handleSubheadingChange(index, 'otherlinks', e.target.value.split(', '))}
          />
          {/*Button to add more links*/}
          <button type='button' onClick={()=>addLink(index)}>Add links</button>
          {/* Button to remove this subheading */}
          <button type="button" onClick={() => removeSubheading(index)}>Remove Subheading {index + 1}</button>
          <hr />
        </div>
      ))}
      {/* Button to add a new subheading */}
      <button type="button" onClick={addSubheading}>Add Subheading</button>
      <br />
      {/* Submit button for the form */}
      <button type="submit">Submit</button>
    </form>
  </div>
);
};



export default Admin
