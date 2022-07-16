import { useQuery, gql } from "@apollo/client";
import { GET_CHARACTERS } from "../Queries";

export default function CharacterList(query) {
	const searchInput = query.query;
	const { loading, error, data } = useQuery(GET_CHARACTERS);

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Error :(</p>;

	return data.characters.results
		.filter((character) => 
		character.name.toLowerCase().includes(searchInput) || 
		character.status.toLowerCase().includes(searchInput) ||
		character.species.toLowerCase().includes(searchInput) ||
		character.created.toLowerCase().includes(searchInput)
		)
		.map((character) => (
			<div class="mx-20 grid mt-3">
				<div
					class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 p-3 max-w-xs md:max-w-3xl mx-20 border border-white bg-white"
					key={character.id}
				>
					<div class="relative">
						<img
							class="w-20 h-20 rounded-md object-cover shadow-md"
							src={`${character.image}`}
							alt={character.name}
						/>
					</div>
					<div class="w-full bg-gray-100 flex flex-col space-y-2 p-3 rounded-xl shadow-md ">
						<div class="flex justify-between item-center pt-4">
							<p class="text-gray-500 font-medium hidden md:block">
								{character.name}
							</p>
							<div class="flex items-center">
								<p class="text-gray-600 font-bold text-sm ml-1">
									{character.created}
								</p>
							</div>
							<div class="flex items-center">
								<p class="text-gray-600 font-bold text-sm ml-1">
									{character.species}
								</p>
							</div>
							<div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
								{character.status}
							</div>
						</div>
					</div>
				</div>
			</div>
		));
}
