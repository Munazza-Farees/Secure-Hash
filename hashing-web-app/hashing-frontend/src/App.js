import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	const [input, setInput] = useState('');
	const [hash, setHash] = useState('');
	const [error, setError] = useState('');
	const [algorithm, setAlgorithm] = useState('');

	const handleHash = async () => {
		try {
			if (!input.trim()) {
				setError("Please enter input to perform hashing!");
				setHash('');
				return;
			}
			const response = await axios.post(
				`http://localhost:8080/api/hash/${algorithm}`,
				input,
				{
					headers: { 'Content-Type': 'text/plain' },
				});
			console.log(`Calling: /api/hash/${algorithm}`);
			console.log(response.data.toUpperCase());
			setHash(response.data.toUpperCase());
			setError('');
		} catch (err) {
			setError(' Error: ' + err.message);
			setHash('');
		}
	};
	
	const handleExport = () => {
		if(!hash) {
			return;
		}
		
		const blob = new Blob([hash], {type: 'text/plain; charset=utf-8'});
		const url = URL.createObjectURL(blob);
		
		const link = document.createElement('a');
		link.href = url;
		link.download = 'hashed_output.txt';
		document.body.appendChild(link);
		link.click();
		
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	};

	return (
		/* Main Page */
		<div className="main d-flex">
			{/* Sidebar */}
			<div className="navbar bg-white me-1 px-2 rounded w-25 h-50" style={{boxShadow: '2px 2px 1px 1px #000000' }}>
				<div className="d-flex flex-column w-100">
					<button className="btn btn-outline-warning m-2 text-danger" style={algorithm === 'md5' ? { boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.4)' } : {}} onClick={() => { setAlgorithm('md5'); setHash('') }}>MD5</button>
					<button className="btn btn-outline-warning m-2 text-danger" style={algorithm === 'sha1' ? { boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.4)' } : {}} onClick={() => { setAlgorithm('sha1'); setHash('') }} > SHA - 1</button>
					<button className="btn btn-outline-warning m-2 text-danger" style={algorithm === 'sha256' ? { boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.4)' } : {}} onClick={() => { setAlgorithm('sha256'); setHash('') }} > SHA - 256</button>
					<button className="btn btn-outline-warning m-2 text-danger" style={algorithm === 'sha512' ? { boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.4)' } : {}} onClick={() => { setAlgorithm('sha512'); setHash('') }} > SHA - 512</button>
				</div >
			</div >

			{/* Content Area */}
			< div className="card ms-1 p-4 bg-white w-75" style={{boxShadow: '2px 2px 1px 1px #000000' }}>
				<div className="card m-2 p-3" style={{ borderBottom: 'none', borderRadius: '10px', boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.4'}}>
					<h1>{algorithm.toUpperCase()} Hashing</h1>
					<div className="me-3">
						<textarea
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Enter text to hash"
							rows="5"
							className="form-control"
						/>
					</div>
					<div className="ms-2">
						<button className="btn btn-success w-25" style={{boxShadow: '2px 2px 1px 1px #000000' }} onClick={handleHash}>Hash</button>
					</div>
				</div>
				<div className="card m-2 p-3" style={{ borderTop: 'none', borderRadius: '10px', boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.4'}}>
					<div className="mt-2">
						{hash && (
							<div className="w-100">
								<h3>Hashed Output ({algorithm.toUpperCase()})</h3>
								<p className="hash-text">{hash}</p>
							</div>
						)}
						{error && <p style={{ color: 'red' }}>{error}</p>}
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<button className="btn btn-dark" onClick={handleExport} disabled={!hash}>Export</button>
				</div>
			</div >
		</div >

	);
}

export default App;