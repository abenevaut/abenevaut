<div x-data="{ open: false }">
    <button class="p-3 lg:hidden hover:bg-primary hover:text-white focus:bg-primary focus:text-white" @click="open = true"><i ya-icon="menu"></i></button>
    <div
        class="absolute top-0 left-0 z-50 w-full mt-12"
        x-show="open"
        @click.away="open = false"
    >
        <div class="mt-1 bg-dark-300">
            <div class="flex flex-col">
                <a class="block w-full px-4 py-2 text-sm font-bold uppercase border-b border-white border-opacity-5 text-white  hover:bg-primary hover:text-white focus:bg-dark-400 focus:text-primary" href="index.html">Portfolio</a>
                <a class="block w-full px-4 py-2 text-sm font-bold uppercase border-b border-white border-opacity-5 text-white  hover:bg-primary hover:text-white focus:bg-dark-400 focus:text-primary" href="profile.html">About me</a>
            </div>
        </div>
    </div>
</div>