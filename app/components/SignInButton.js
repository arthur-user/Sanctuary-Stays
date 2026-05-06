import { signInWithGoogle, signInWithGithub, signInWithDiscord } from "../_lib/actions";

// Server Component: can't use onClick (client-side event handlers)
// so we use a <form action={...}> to trigger the server action

function SignInButton() {
  return (
    <div className="flex flex-col gap-4">
      <form action={signInWithGoogle}>
        <button className='flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium cursor-pointer'>
          <img src='https://authjs.dev/img/providers/google.svg' alt='Google logo' height='24' width='24' />
          <span>Continue with Google</span>
        </button>
      </form>

      <form action={signInWithGithub}>
        <button className='flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium cursor-pointer'>
          <img src='https://authjs.dev/img/providers/github.svg' alt='GitHub logo' height='24' width='24' />
          <span>Continue with GitHub</span>
        </button>
      </form>

      <form action={signInWithDiscord}>
        <button className='flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium cursor-pointer'>
          <img src='https://authjs.dev/img/providers/discord.svg' alt='Discord logo' height='24' width='24' />
          <span>Continue with Discord</span>
        </button>
      </form>
    </div>
  );
}

export default SignInButton;
