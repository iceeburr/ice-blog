import NotFoundPageClient from "./not-found.client";
export const metadata = {
  title: 'Error 404 - page not found',
  description: "You tried to access a page that doesn't exist. Maybe you made a typo in the link.",
};

export default function NotFoundPage(){
  return <div><NotFoundPageClient/></div>
}