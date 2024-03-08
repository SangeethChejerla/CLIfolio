"use client"
import React, { useState } from 'react';
import ConfirmationPrompt from './select-option';
import { MESSAGES } from '@/constants/data'; // Assuming MESSAGES contains all required messages

const Myoptions: React.FC = () => {
    const [showPrompt1, setShowPrompt1] = useState<boolean>(false);
    const [message1, setMessage1] = useState<string>('');

    const [showPrompt2, setShowPrompt2] = useState<boolean>(false);
    const [message2, setMessage2] = useState<string>('');

    const handleConfirm1 = () => {
        setShowPrompt1(false);
        setMessage1(MESSAGES.giveStar);
    };

    const handleCancel1 = () => {
        setShowPrompt1(false);
        setMessage1(MESSAGES.thanksNoStar);
    };

    const handleProject = () => {
        setShowPrompt2(false);
        setMessage2(MESSAGES.likeProject);
    };

    const handleCancelProject = () => {
        setShowPrompt2(false);
        setMessage2(MESSAGES.no);
    };

    return (
        <>
            <div>
                <h1>CLIFolio Project</h1>
                <button onClick={() => setShowPrompt1(true)}>did you give star in github?</button>
                {showPrompt1 && (
                    <ConfirmationPrompt
                        onConfirm={handleConfirm1}
                        onCancel={handleCancel1} message={''}                    />
                )}
                {message1 && <p>{message1}</p>}
            </div>

            <div>
                <h1>2nd</h1>
                <button onClick={() => setShowPrompt2(true)}>Do you like the project</button>
                {showPrompt2 && (
                    <ConfirmationPrompt
                        onConfirm={handleProject}
                        onCancel={handleCancelProject} message={''}                    />
                )}
                {message2 && <p>{message2}</p>}
            </div>
        </>
    );
};

export default Myoptions;
