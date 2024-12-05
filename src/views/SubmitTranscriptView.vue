<script setup lang="ts">
import { ref } from 'vue'

const transcript = ref('')

const handleSubmit = () => {
  // TODO: Handle transcript submission
  console.log('Submitted transcript:', transcript.value)
}
</script>

<template>
  <div class="submit-transcript">
    <h1>Submit Transcript</h1>
    <form @submit.prevent="handleSubmit" class="transcript-form">
      <div class="form-group">
        <label for="transcript">Enter your transcript:</label>
        <textarea
          id="transcript"
          v-model="transcript"
          rows="10"
          placeholder="Paste your transcript here..."
          required
        ></textarea>
      </div>
      <button type="submit" class="submit-button">Submit Transcript</button>
    </form>
  </div>
</template>

<style scoped>
.submit-transcript {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.transcript-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.submit-button:hover {
  background-color: #45a049;
}
</style> 