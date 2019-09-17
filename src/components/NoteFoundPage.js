import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

//thiis Link is to not go the the server but use client
const NoteFoundPage = () => (
    <div>

        404  - <Link to = "/"> go home</Link>
    </div>
);

export default NoteFoundPage;