import React from 'react';
import { FaSadCry } from 'react-icons/fa'; // Import a sad face icon from a popular icon library

const NoResult = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-gray-500">
            <FaSadCry className="text-5xl mb-4" /> {/* Sad face icon */}
            <p className="text-xl font-semibold mb-2">Oops! No results found.</p>
            <p className="text-sm text-center">We couldn&lsquo;t find any products matching your search.</p>
        </div>
    );
}

export default NoResult;
