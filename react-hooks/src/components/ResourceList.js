import React, { useState, useEffect } from "react";

import jsonPlaceholder from "../api/jsonPlaceholder";

const ResourceList=({resource})=>{
  const [resources, setResrouces] = useState([]);
  const fetchResource = async resource => {
    const responce = await jsonPlaceholder.get(`/${resource}`);
    setResrouces(responce.data);
  };
  useEffect(()=>{fetchResource(resource);}, [resource]);
  return(
    <div className='ui bulleted list'>
      {resources.map(item=>{
        return(
          <div className="item" key={item.id}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};


export default ResourceList;