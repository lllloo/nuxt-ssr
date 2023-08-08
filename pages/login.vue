<template>
    <section class="bg-white">
        <div class="flex h-full">
            <section class="w-1/2 relative">
                <img alt="Night" src="https://picsum.photos/720/1000"
                    class="absolute inset-0 h-full w-full object-cover opacity-80" />
            </section>
            <main class="w-1/2 flex items-center justify-center">
                <form class="w-full max-w-xs">
                    <div class="mb-[20px]">
                        <label for="Email" class="block mb-2">
                            Email
                        </label>
                        <input type="email" id="Email" name="email" v-model="user.email"
                            class="w-full rounded-md border-2 text-sm p-2" />
                    </div>

                    <div class="mb-[30px]">
                        <label for="Password" class="block mb-2">
                            Password
                        </label>
                        <input type="password" id="Password" name="password" v-model="user.password"
                            class="w-full rounded-md border-2 text-sm p-2" />
                    </div>

                    <a @click="login" href="javascript:;"
                        class="flex items-center justify-center rounded-md w-full text-sm p-2 bg-blue-500 text-white">
                        Login
                    </a>

                </form>
            </main>
        </div>
    </section>
</template>
<script setup>
import {
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
definePageMeta({
    layout: false,
});

const auth = useFirebaseAuth()

const user = reactive({
    email: '',
    password: '',
});

const login = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            navigateTo('/')
        })
        .catch((error) => {
            console.log('out');
        });
};

</script>