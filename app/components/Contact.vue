<template>
  <div
    class="grid grid-cols-[1fr_minmax(0,28rem)_1fr] absolute left-0 w-[99vw] min-h-screen items-center justify-center"
  >
    <div class="bg-[url(/l-hand.png)] hands h-screen"></div>

    <form
      @submit.prevent="handleSubmit"
      class="contact relative flex flex-col block-layer1 bg-neutral-900 max-w-md w-full gap-2 !p-7 !pb-2"
    >
      <!-- Name -->
      <label for="name">
        Name:
        <p
          v-if="focused.name || isTooLong('name')"
          :class="[
            'text-sm absolute top-0 right-0',
            isTooLong('name') ? 'text-red-400' : 'text-neutral-600',
          ]"
        >
          {{ len('name') }} / {{ LIMITS.name }}
        </p>
      </label>
      <input
        v-model="formData.name"
        id="name"
        type="text"
        placeholder="John Doe"
        :maxlength="LIMITS.name"
        required
        @focus="focusField('name')"
        @blur="blurField('name')"
        :class="{
          'input-success': touched.name && isFilled('name') && !isTooLong('name'),
          'input-error': touched.name && (isTooLong('name') || !isFilled('name')),
        }"
      />

      <div class="hp">
        <input type="text" name="surname" tabindex="-1" autocomplete="off" />
      </div>

      <!-- Email -->
      <label for="email">
        Email:
        <p
          v-if="focused.email || isTooLong('email')"
          :class="[
            'text-sm absolute top-0 right-0',
            isTooLong('email') ? 'text-red-400' : 'text-neutral-600',
          ]"
        >
          {{ len('email') }} / {{ LIMITS.email }}
        </p>
      </label>
      <input
        v-model="formData.email"
        id="email"
        type="email"
        placeholder="example@domain.com"
        :maxlength="LIMITS.email"
        required
        @focus="focusField('email')"
        @blur="blurField('email')"
        :class="{
          'input-success': touched.email && isEmailValidWithLength && !!formData.email,
          'input-error': touched.email && (!isEmailValid(formData.email) || isTooLong('email')),
        }"
      />

      <!-- Message -->
      <label for="message">
        Message:
        <p
          v-if="focused.message || isTooLong('message')"
          :class="[
            'text-sm absolute top-0 right-0',
            isTooLong('message') ? 'text-red-400' : 'text-neutral-600',
          ]"
        >
          {{ len('message') }} / {{ LIMITS.message }}
        </p>
      </label>
      <textarea
        v-model="formData.message"
        id="message"
        placeholder="Hello..."
        :maxlength="LIMITS.message"
        required
        @focus="focusField('message')"
        @blur="blurField('message')"
        :class="{
          'input-success': touched.message && isFilled('message') && !isTooLong('message'),
          'input-error': touched.message && (isTooLong('message') || !isFilled('message')),
        }"
      ></textarea>

      <!-- Submit -->
      <button
        type="submit"
        class="btn py-3 px-16 rounded-xl w-fit self-center mt-6"
        :disabled="loading || isFormInvalid"
      >
        {{ loading ? 'Sending...' : 'Submit' }}
      </button>

      <div v-if="message" :class="message.type" class="py-2 mb-2 text-center">
        {{ message.text }}
      </div>
      <p class="text-neutral-600 text-center">Made with Google Forms</p>
    </form>

    <div class="bg-[url(/r-hand.png)] hands h-screen"></div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue';

const LIMITS = { name: 100, email: 254, message: 1000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const loading = ref(false);
const message = ref(null);

const formData = reactive({ name: '', email: '', message: '' });
const touched = reactive({ name: false, email: false, message: false });
const focused = reactive({ name: false, email: false, message: false });

const formStartTime = ref(0);

const len = (f) => formData[f].length;
const isTooLong = (f) => len(f) > LIMITS[f];
const isFilled = (f) => formData[f].trim().length > 0;
const isEmailValid = (v) => EMAIL_RE.test(v);

const isEmailValidWithLength = computed(() => isEmailValid(formData.email) && !isTooLong('email'));

const isFormInvalid = computed(
  () =>
    isTooLong('name') ||
    isTooLong('email') ||
    isTooLong('message') ||
    (touched.email && formData.email && !isEmailValidWithLength.value)
);

function focusField(field) {
  focused[field] = true;
}
function blurField(field) {
  focused[field] = false;
  touched[field] = true;
}

onMounted(() => {
  formStartTime.value = Date.now();
});

async function handleSubmit() {
  touched.name = true;
  touched.email = true;
  touched.message = true;

  if (
    isFormInvalid.value ||
    !isFilled('name') ||
    !isFilled('message') ||
    !isEmailValidWithLength.value
  ) {
    message.value = { type: 'error', text: 'Пожалуйста, исправьте ошибки в форме.' };
    return;
  }

  loading.value = true;
  message.value = null;

  const timeSpent = Date.now() - formStartTime.value;
  const url =
    'https://script.google.com/macros/s/AKfycbyedaR_x4K6j3-pe1dwDde_1tvfP9wmwt771kAxT0Rc-AHmbUcDLFFQRcAKW2ojNmsl/exec';

  const params = new URLSearchParams({
    'entry.507504229': formData.name,
    'entry.1150681091': formData.email,
    'entry.690521900': formData.message,
    surname: '',
    load_time: String(timeSpent),
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const result = await response.json();
    if (result.status === 'success') {
      message.value = { type: 'success', text: 'Thank you for your message! ✨' };
      formData.name = '';
      formData.email = '';
      formData.message = '';
      touched.name = touched.email = touched.message = false;
      focused.name = focused.email = focused.message = false;
    } else {
      throw new Error(result.message || 'Неизвестная ошибка');
    }
  } catch (error) {
    console.error('Ошибка отправки:', error);
    message.value = { type: 'error', text: 'Не удалось отправить сообщение. Попробуйте позже.' };
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
label {
  @apply text-neutral-400 relative;
}

.hands {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
}

.contact::before {
  content: 'CONTACT ME';
  font-weight: 800;
  position: absolute;
  text-align: center;
  top: -180px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 180px;
  z-index: -1;
  color: #222222;
  pointer-events: none;
  white-space: nowrap;
  width: 90vw;
}

.hp {
  position: absolute;
  left: -9999px;
}

input,
textarea {
  @apply border border-neutral-600 mb-3 rounded-xl w-full bg-neutral-800 py-3 px-5 resize-none placeholder:text-neutral-600 focus:outline-none focus:border-neutral-400;
  field-sizing: content;
  &.input-error {
    @apply border-red-400;
  }
  &.input-success {
    @apply border-green-400;
  }
}
</style>
