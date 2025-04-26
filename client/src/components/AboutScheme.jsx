const AboutScheme = () => {
    return (
        <>
            <div className="p-8 bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-800">Scheme Description</h2>
                <p className="text-gray-700 mt-4 leading-relaxed">
                    This scheme is designed to provide financial assistance to eligible individuals. It aims to improve the quality of life and support those in need.
                </p>
            </div>

            {/* Eligibility Criteria */}
            <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
                <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                    <li>Must be a resident of the country.</li>
                    <li>Annual income should not exceed the specified limit.</li>
                    <li>Age should be between 18 and 60 years.</li>
                </ul>
            </div>

            {/* Steps for Applying */}
            <div className="p-8 bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-800">Steps for Applying</h2>
                <ol className="list-decimal list-inside mt-4 text-gray-700 space-y-2">
                    <li>Visit the official portal.</li>
                    <li>Register with your personal details.</li>
                    <li>Upload the required documents.</li>
                    <li>Submit the application and note the reference number.</li>
                </ol>
            </div>

            {/* Documents Required */}
            <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800">Documents Required</h2>
                <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                    <li>Proof of Identity (Aadhaar Card, Passport, etc.)</li>
                    <li>Proof of Residence (Utility Bill, Rent Agreement, etc.)</li>
                    <li>Income Certificate</li>
                </ul>
            </div>
        </>

    );
}

export default AboutScheme;