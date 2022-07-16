import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import CharacterList from "./components/CharacterList";

import { useState } from "react";

const client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql",
	cache: new InMemoryCache(),
});

export default function App() {
	const [searchInput, setSearchInput] = useState("");

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);
	};


  const [value, setValue] = useState("lime");

  const handleChange = (e) => {
    setValue({ value: e.target.value });
    console.log(value);
  };  
  
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<div class="container mx-auto px-4 py-14 sm:px-6 xl:px-12">
					<div class="flex flex-col items-center justify-center space-y-6 text-center">
						<h1 class="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">
							MOVIE CHARACTERS
						</h1>
					</div>
				</div>

				<div class="max-w-2xl mx-auto">
					<form>
						<label
							for="default-search"
							class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
						>
							Search
						</label>
						<div class="relative">
							<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									></path>
								</svg>
							</div>
							<input
								type="search"
								id="default-search"
								class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus-within:shadow-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search"
								onChange={(e) => searchItems(e.target.value)}
								required
							/>
						</div>
					</form>
				</div>

				<div class="max-w-2xl w-full mt-9 flex  justify-center items-center mx-auto ">
					<button
						type="button"
						class="px-12 py-3 bg-blue-600 rounded-md text-white  outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
					>
						<span class="ml-2 text-xl font-semibold">Humans</span>
					</button>

					<button
						type="button"
						class="px-12 py-3 bg-blue-600 rounded-md text-white  outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
					>
						<span class="ml-2 text-xl font-semibold">Aliens</span>
					</button>
					<div className="bg-white-100  border border-gray-200  svelte-1l8159u px-2 py-2 rounded-md text-white  outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex">
						<select
							className="form-select  px-6 py-2 bg-white text-black rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
							value={value}
							onChange={handleChange}
						>
							<option value="">Filter status</option>
							<option value="Alive">Alive</option>
							<option value="Dead">Dead</option>
							<option value="unknown">unknown</option>
						</select>
					</div>
				</div>

				<div className="mt-20">
					<CharacterList query={searchInput} />
				</div>
			</div>
		</ApolloProvider>
	);
}
