<template>
  <div
    :class="['sidebar', { collapsed: isCollapsed }]"
    class="bg-dark text-white p-3"
  >
    <!-- Toggle button for Sidebar -->
    <button
      @click="toggleSidebar"
      class="btn btn-outline-light w-100 d-flex align-items-center"
    >
      <i
        :class="isCollapsed ? 'bi bi-chevron-right' : 'bi bi-chevron-left'"
      ></i>
      <span v-if="!isCollapsed" class="ms-2">Menu</span>
    </button>

    <!-- Menu Items, show only when sidebar is not collapsed -->
    <div v-if="!isCollapsed" class="mt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/settings" class="nav-link text-white"
            >Settings</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  transition: width 0.3s;
}

.sidebar.collapsed {
  width: 80px;
}

.nav-link {
  color: white !important;
}

.btn {
  display: flex;
  align-items: center;
  width: 100%; /* Make the button span 100% width */
}

.ms-2 {
  margin-left: 8px;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 80px;
  }

  .sidebar.collapsed {
    width: 0;
  }

  .sidebar .nav-link {
    font-size: 12px;
  }
}
</style>
