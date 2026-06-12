export interface AdminUser {
  id: string
  username: string
  email: string
  role: 'super_admin' | 'admin' | 'editor'
  isActive: boolean
  lastLogin?: string
  createdAt: string
}

export interface Chapter {
  id: string
  chapterNumber: number
  titleEn: string
  titleBn: string | null
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string | null
  coverImageUrl: string | null
  isPublished: boolean
  sortOrder: number
  createdAt: string
}

export interface SideMenu {
  id: string
  chapterId: string
  labelEn: string
  labelBn: string | null
  icon: string | null
  sortOrder: number
  isActive: boolean
  subMenus?: SubSideMenu[]
}

export interface SubSideMenu {
  id: string
  sideMenuId: string
  labelEn: string
  labelBn: string | null
  sortOrder: number
  isActive: boolean
}

export interface Lesson {
  id: string
  subSideMenuId: string
  lessonNumber: number
  titleEn: string
  titleBn: string | null
  contentEn: string
  contentBn: string | null
  codeEn: string | null
  codeBn: string | null
  takeawaysEn: string[]
  takeawaysBn: string[]
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  isPublished: boolean
  createdAt: string
}

export interface UploadedFile {
  id: string
  originalName: string
  storagePath: string
  mimeType: string
  fileSize: number
  uploadedBy: string | null
  createdAt: string
}

export interface DashboardStats {
  totalChapters: number
  publishedChapters: number
  totalLessons: number
  publishedLessons: number
  totalSideMenus: number
  activeSideMenus: number
  totalSubMenus: number
  activeSubMenus: number
}

export interface AuthResponse {
  token: string
  user: Pick<AdminUser, 'id' | 'username' | 'email' | 'role'>
}

export interface LoginRequest {
  username: string
  password: string
}
