import React from 'react';

function UserFooter() {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div>
                            <h1>LOGO1</h1>
                        </div>
                        <div className='flex'>
                            <a href="/">1</a>
                            <a href="/">2</a>
                            <a href="/">2</a>
                            <a href="/">4</a>
                        </div>
                        <div>
                            <h1>LOGO2</h1>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default UserFooter;