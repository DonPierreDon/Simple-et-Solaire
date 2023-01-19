<template>
  <vee-form :validation-schema="schema">
    <!-- Nom -->
    <div class="mb-3">
      <vee-field
        name="nom"
        type="text"
        class="block w-full py-3 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Votre nom"
      />
      <ErrorMessage class="text-red-600" name="nom" />
    </div>
    <!-- Prenom -->
    <div class="mb-3">
      <vee-field
        type="text"
        name="prenom"
        class="block w-full py-3 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Votre prenom"
      />
      <ErrorMessage class="text-red-600" name="prenom" />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <vee-field
        type="email"
        name="email"
        class="block w-full py-3 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Votre email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Phone -->
    <div class="mb-3">
      <vee-field
        type="telephone"
        name="telephone"
        class="block w-full py-3 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Votre numero de telephone"
      />
      <ErrorMessage class="text-red-600" name="telephone" />
    </div>
    <!-- Message -->
    <div class="mb-3">
      <label class="inline-block mb-2">Votre message</label>
      <textarea
        id="message"
        rows="6"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="message sympa ici"
      ></textarea>
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field
        type="checkbox"
        name="cgu"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <ErrorMessage class="text-red-600" name="cgu" />
      <label class="inline-block">conditions générales d'utilisation</label>
    </div>

    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Envoi
    </button>
  </vee-form>
</template>

<script>
export default {
  name: "registerForm",
  data() {
    return {
      tab: "contact",
      schema: {
        nom: "required|max:100|alpha_spaces",
        prenom: "required|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        telephone: "required|digits:10",
        cgu: "tos",
      },
    };
  },
  components: {},
};
</script>
