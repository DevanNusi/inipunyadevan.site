async function fetchPostData() {
    const postCard = document.getElementById('postCard');
    
    try {
        const [postResponse, userResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/12'),
            fetch('https://jsonplaceholder.typicode.com/users/12')
        ]);

        const post = await postResponse.json();
        const user = await userResponse.json();

        postCard.innerHTML = `
            <div class="p-6 space-y-4">
                <div class="border-b-2 border-gray-200 pb-4">
                    <h1 class="
                        text-2xl 
                        md:text-3xl 
                        font-bold 
                        text-center 
                        tracking-wide
                        text-univenus-red
                    ">
                        Post #${post.id}
                    </h1>
                </div>

                <div class="space-y-4">
                    <div class="flex items-center space-x-3 bg-gray-100 p-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-univenus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div>
                            <p class="text-sm font-semibold text-univenus-red">User ID: ${post.userId}</p>
                            <p class="text-xs text-gray-600">Devan</p>
                        </div>
                    </div>

                    <div>
                        <h2 class="
                            font-semibold 
                            text-lg 
                            mb-2 
                            text-univenus-red
                        ">
                            Title:
                        </h2>
                        <p class="
                            bg-gray-100 
                            p-3 
                            rounded-md 
                            text-sm 
                            md:text-base 
                            break-words
                        ">
                            ${post.title}
                        </p>
                    </div>

                    <div>
                        <h2 class="
                            font-semibold 
                            text-lg 
                            mb-2 
                            text-univenus-red
                        ">
                            Body:
                        </h2>
                        <p class="
                            bg-gray-100 
                            p-3 
                            rounded-md 
                            text-sm 
                            md:text-base 
                            break-words
                        ">
                            ${post.body}
                        </p>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        postCard.innerHTML = `
            <div class="
                p-6 
                text-center 
                flex 
                flex-col 
                items-center 
                justify-center 
                space-y-4
            ">
                <svg class="h-12 w-12 text-univenus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="
                    font-bold 
                    text-lg 
                    md:text-xl
                    text-univenus-red
                ">
                    Error: ${error.message}
                </p>
            </div>
        `;
        postCard.classList.remove('bg-white');
        postCard.classList.add('bg-red-50');
    }
}

fetchPostData();