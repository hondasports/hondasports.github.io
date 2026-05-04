interface MenuItem {
  label: string
  command: () => void
}

export function useNavigation(): { mobileMenuVisible: Ref<boolean>, menuItems: MenuItem[] } {
  const mobileMenuVisible = ref(false)

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    mobileMenuVisible.value = false
  }

  const menuItems: MenuItem[] = [
    { label: 'トップ', command: (): void => scrollTo('top') },
    { label: '自己紹介', command: (): void => scrollTo('about') },
    { label: 'スキル', command: (): void => scrollTo('skill') },
    { label: 'コンテンツ', command: (): void => scrollTo('content') },
  ]

  return { mobileMenuVisible, menuItems }
}
