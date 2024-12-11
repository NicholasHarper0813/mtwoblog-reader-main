import React from 'react';

const List = ({posts, selected, onSelectPost}) =>  (
    <div className="nav-container">
        <div className="card">
            <div className="card-body">
                <div className="list-group">
                    <div className={`list-group-item pointer ${-1 === selected ? `active` : ``}`} onClick={ () => onSelectPost(-1) }>Home</div>
                    {posts.map(post => <div key={post.ID} className={`list-group-item pointer ${post.ID === selected ? `active` : ``}`} onClick={ () => onSelectPost(post.ID) } dangerouslySetInnerHTML={{ __html: post.title }} />)}
                </div>
            </div>
        </div>
    </div>
)

export default List;