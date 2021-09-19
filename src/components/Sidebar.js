import React from 'react'

function Sidebar(props) {
    const { currentPage, isFemale } = props
    const normal = ['Personal Information', "Illness Information", "Hospitalizations", "Medications and Addictions"]
    const female = ['Personal Information', "Illness Information", "Previous Pregnancies", "Hospitalizations", "Medications and Addictions"]
    const pages = isFemale ? female : normal

    return (
        <form className="hidden lg:block">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                {
                    pages.map((page, index) => {
                        if (!isFemale) {
                            if (index === currentPage-1) {
                                return (
                                    <li key={page} className="initial-items">
                                        <a className="links block px-2 py-3">
                                            {page}
                                        </a>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={page} className="items">
                                        <a className="links block px-2 py-3">
                                            {page}
                                        </a>
                                    </li>
                                )
                            }
                        } else {
                            if ((index === 2 && currentPage === 5) || (index === 0 && currentPage === 1) || 
                                (index === 1 && currentPage === 2) || (index === 3 && currentPage === 3) ||
                                (index === 4 && currentPage === 4)) {
                                return (
                                    <li key={page} className="initial-items">
                                        <a className="links block px-2 py-3">
                                            {page}
                                        </a>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={page} className="items">
                                        <a className="links block px-2 py-3">
                                            {page}
                                        </a>
                                    </li>
                                )
                            }
                        }            
                    })
                }
            </ul>
        </form>
    )
}

export default Sidebar