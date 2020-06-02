import React from 'react';
import { Link } from 'gatsby';
import './card.css';

export default () => (
    <a class="card2" href="#">
        <h3>This is option 2</h3>
        <p class="small">Card description with lots of great facts and interesting details.</p>
        
        <div class="go-corner" href="#">
        <div class="go-arrow">
            →
        </div>
        </div>
    </a>
)