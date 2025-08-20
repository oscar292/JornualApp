import {Link} from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className='auth__title'>Login</h3>

            <form>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className='auth__input'
                    autoComplete='off'
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className='auth__input'
                />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={true}
                >
                    Login                    
                </button>

                <hr />
                
                <div className='auth__social-network'>
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/240px-Google_%22G%22_logo.svg.png" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
                
            </form>
        </>
    )
}
