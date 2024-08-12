import React from 'react';

const NewsItem = (props) => {
    let { title, description, newsUrl, author, date } = props;
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                        Read more
                    </a>
                    <small className="text-muted">
                        <b>{author}</b> on {new Date(date).toDateString()}
                    </small>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
