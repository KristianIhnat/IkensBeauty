export interface ServiceType {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
}