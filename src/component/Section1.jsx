import React from 'react';
import styled from 'styled-components';

const Section1 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image_container">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="image">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
          </svg>
        </div>
      
        <div className="action">
          <button className="download-button">
            <span className="button-text">DOWNLOAD</span>
            <span className="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="download-svg">
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    --bg-card: #27272a;
    --primary: #6d28d9;
    --primary-800: #4c1d95;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem;
    width: 300px;
    height: 400px;
    background-color: var(--bg-card);
    border-radius: 1rem;
    border: 2px dashed #e8e8e8;
  }

  .image_container {
    position:absolute;
    top: 75px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    z-index: 5;
    width: 100%;
    height: 10rem;
    background-color: var(--primary-800);
    border-radius: 0.5rem;
  }

  .image_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    fill: var(--light);
  }

  .title {
    overflow: clip;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--light);
    text-transform: capitalize;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }

  .size {
    font-size: 0.75rem;
    color: var(--light);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-size {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.25rem;
  }

  .list-size .item-list {
    list-style: none;
  }

  .list-size .item-list-button {
    cursor: pointer;
    padding: 0.5rem;
    background-color: var(--zinc-800);
    font-size: 0.75rem;
    color: var(--light);
    border: 2px solid var(--zinc-800);
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
  }

  .item-list-button:hover {
    border: 2px solid var(--light);
  }

  .item-list-button:focus {
    background-color: var(--primary);
    border: 2px solid var(--primary-shadow);
    box-shadow: inset 0px 1px 4px var(--primary-shadow);
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* New Download Button Styles */
  button{

  }
  .download-button {
    position: absolute;
    bottom:10px;
    width: 90%;
    height: 2.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: var(--bg-linear);
    border: 2px solid hsla(262, 18%, 57%, 0.5);
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .button-text {
    color: var(--light);
    font-weight: 750;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .button-icon {
    position: absolute;
    height: 100%;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-800);
    right: -2.5rem;
    transition: all 0.3s ease;
  }

  .download-svg {
    width: 1.25rem;
    fill: var(--light);
  }

  .download-button:hover {
    background: var(--primary-800);
  }

  .download-button:hover .button-text {
    transform: translateX(-1.25rem);
    opacity: 0;
  }

  .download-button:hover .button-icon {
    right: 0;
    width: 100%;
  }

  .download-button:active {
    transform: scale(0.95);
  }

  .download-button:active .button-icon {
    background-color: var(--primary-shadow);
  }`;

export default Section1;
