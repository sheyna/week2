import React, { Component } from 'react';
import BookmarkIcon from './BookmarkIcon';
import './CitationBox.css';

class CitationBox extends Component {

  authorPhotoHalo() {
    return (
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.44615311,11.6601601 C6.57294867,5.47967718 12.9131553,1.5 19.9642857,1.5 C27.0154162,1.5 33.3556228,5.47967718 36.4824183,11.6601601 L37.3747245,11.2087295 C34.0793076,4.69494641 27.3961457,0.5 19.9642857,0.5 C12.5324257,0.5 5.84926381,4.69494641 2.55384689,11.2087295 L3.44615311,11.6601601 Z">
        </path>
        <path d="M36.4824183,28.2564276 C33.3556228,34.4369105 27.0154162,38.4165876 19.9642857,38.4165876 C12.9131553,38.4165876 6.57294867,34.4369105 3.44615311,28.2564276 L2.55384689,28.7078582 C5.84926381,35.2216412 12.5324257,39.4165876 19.9642857,39.4165876 C27.3961457,39.4165876 34.0793076,35.2216412 37.3747245,28.7078582 L36.4824183,28.2564276 Z">
        </path>
      </svg>
    );
  }

  render() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const setAuthorPhotoHalo = this.props.citation.author.isMediumMember;
    const datePosted = new Date(this.props.citation.postedDate);

    return (
      <div className="citation-box">
        <a href={this.props.citation.author.link} rel="author">
          <div className="author-photo">
            {setAuthorPhotoHalo ? this.authorPhotoHalo() : null}
            <img src={this.props.citation.author.image} className="author-photo" alt={this.props.citation.author.name} title={this.props.citation.author.name}/>
          </div>
        </a>
        <div className="author-info">
          <a href={this.props.citation.author.link} rel="author">{this.props.citation.author.name}</a>
          <p>{monthNames[datePosted.getMonth()]} {datePosted.getDay()} · {this.props.citation.minutesToRead} min read</p>
        </div>
        <BookmarkIcon />
      </div>
    );
  }
}

export default CitationBox;
