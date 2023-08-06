<template>
    <header class="border-b">
        <nav class="flex align-center gap-4 p-4">
            <NuxtLink to="/" class="n-link-base">
                Home
            </NuxtLink>
            <NuxtLink to="/about" class="n-link-base">
                About
            </NuxtLink>
            <NuxtLink to="/login" class="n-link-base">
                Login
            </NuxtLink>
        </nav>
    </header>
    <div class="flex">
        <TheNav />
        <div class="w-full">
        </div>
    </div>
</template>