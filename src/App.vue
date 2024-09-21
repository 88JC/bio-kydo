<script>
export default {
  data() {
    return {
      profile: {
        name: 'indralana',
        image: '/profile.png' // Replace with your actual profile image URL
      },
      socials: [
        { platform: 'Email', url: 'mailto: indraklana23@gmail.com', icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png' } // Updated icon URL
      ],
      externalLinks: [
        { platform: 'Facebook', url: 'https://www.facebook.com/Indralana178', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', name: 'Facebook' },
        { platform: 'Instagram', url: 'https://www.instagram.com/indralana23', icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png', name: 'Instagram' },
        { platform: 'YouTube', url: 'https://www.youtube.com/@indralana23', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', name: 'YouTube' },
        { platform: 'Spotify', url: 'https://open.spotify.com/user/31o3ekpikpg4dhsmzissz6uv2sny?si=MZhfTPzETbqymvYdg_34_g', icon: 'https://cdn-icons-png.flaticon.com/128/174/174872.png', name: 'Spotify' },
        { platform: 'Twitter', url: 'https://twitter.com/IndraLana136624', icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png', name: 'Twitter' },
        { platform: 'GitHub', url: 'https://github.com/indralana', icon: 'https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png', name: 'GitHub' },
        { platform: 'Discord', url: 'https://discord.gg/seS3pWU7NX', icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504896.png', name: 'Discord' },
        { platform: 'Discord Bot', url: 'https://soulvibe.xyz', icon: 'https://cdn-icons-png.flaticon.com/128/4712/4712027.png', name: 'Discord Bot' }
      ]
    };
  }
}
</script>

<template>
  <div class="container mt-5 zoom-container">
    <!-- Profile Section -->
    <div class="profile-section text-center text-2xl font-bold">
      <img :src="profile.image" alt="Profile Image" class="profile-image"/>
      <h1 class="profile-name">{{ profile.name }}</h1>
    </div>
    <div class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
            <h3>Social Media & Contact</h3>
            <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-[#5865f2]">
              Connect with us through these links
            </h4>
          </div>
        <!-- Social Media Links -->
        <div class="social-links mt-2">
          <a v-for="social in socials" :key="social.platform" :href="social.url" target="_blank" class="social-link">
            <img :src="social.icon" :alt="social.platform" class="social-icon"/>
          </a>
        </div>
        <a v-for="link in externalLinks" :key="link.platform" :href="link.url" class="btn btn-outline-light btn-block" role="button" target="_blank">
          <img :src="link.icon" :alt="link.platform" class="external-icon"/>&nbsp;{{ link.name }}
        </a>
      </div>
</template>

<style scoped>
/* General container styling */
.container {
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
}

/* Profile section styling */
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #5865f2; /* Optional: Add border to profile image */
}

.profile-name {
  font-size: 2rem;
  color: #ffffff;
  margin-top: 1rem;
}

/* Social media links styling */
.social-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.social-link {
  margin: 0 1rem;
  display: inline-flex;
  align-items: center;
}

.social-icon {
  width: 2rem;
  height: 2rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.social-link:hover .social-icon {
  opacity: 0.8;
  transform: scale(1.2); /* Zoom effect for social icons */
}

/* External links styling */
.external-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Button styling */
.btn {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1rem 1.5rem;
  border: 2px solid #a1a1ff;
  border-radius: 8px;
  font-size: 1.25rem;
  margin-top: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

.btn-outline-light {
  color: #ffffff;
  border-color: #5865f2;
}

/* Hover effect for button outline */
.btn-outline-light:hover {
  background-color: rgba(88, 101, 242, 0.2);
  color: #5865f2;
  border-color: #5865f2;
  transform: scale(1.05); /* Zoom effect for button */
}

/* Footer styling */
.footer {
  text-align: center;
  margin-top: 3rem;
}

.footer h6 {
  margin: 0;
}

.love {
  color: red;
}

.name {
  color: #a1a1ff;
  text-decoration: none;
}

.name:hover {
  text-decoration: underline;
}
</style>
